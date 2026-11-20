const receiptCookie = 'car_valuation_receipt';
const receiptPartPrefix = `${receiptCookie}_part_`;

export interface VehicleReceipt {
  full_name: string;
  car_number: string;
  car_location: string;
  country_code: string;
  phone_number: string;
  email: string;
  milage: string;
  expected_selling_price: string;
  condition_document_status: string;
  car_details: string;
  year: string;
  version: string;
  message: string;
}

function attributes(): string {
  return `Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
}

function cookieValue(name: string): string {
  const cookie = document.cookie.split(';').map((value) => value.trim())
    .find((value) => value.startsWith(`${name}=`));
  return cookie ? cookie.slice(name.length + 1) : '';
}

export function saveVehicleReceipt(data: unknown, message: unknown): boolean {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
  const fields = data as Record<string, unknown>;
  const vehicle = fields.vehicle_details && typeof fields.vehicle_details === 'object'
    ? fields.vehicle_details as Record<string, unknown> : {};
  const text = (value: unknown) => typeof value === 'string' || typeof value === 'number'
    ? String(value).trim() : '';
  
  const receipt: VehicleReceipt = {
    full_name: text(fields.full_name),
    car_number: text(fields.car_number),
    car_location: text(fields.car_location),
    country_code: text(fields.country_code),
    phone_number: text(fields.phone_number),
    email: text(fields.email),
    milage: text(fields.milage ?? fields.mileage_km),
    expected_selling_price: text(fields.expected_selling_price),
    condition_document_status: text(fields.condition_document_status),
    car_details: text(vehicle.car_details),
    year: text(vehicle.year),
    version: text(vehicle.version),
    message: text(message),
  };
  if (!receipt.car_number) return false;
  try {
    clearVehicleReceipt();
    const encoded = encodeURIComponent(JSON.stringify(receipt));
    
    const parts = encoded.match(/.{1,3000}/g) || [];
    if (!parts.length || parts.length > 8) return false;
    for (let index = 0; index < parts.length; index++) {
      const name = `${receiptPartPrefix}${index}`;
      document.cookie = `${name}=${parts[index]}; Max-Age=300; ${attributes()}`;
      if (cookieValue(name) !== parts[index]) {
        clearVehicleReceipt();
        return false;
      }
    }
    const permit = encodeURIComponent(JSON.stringify({ expires_at: Date.now() + 300000, parts: parts.length }));
    document.cookie = `${receiptCookie}=${permit}; Max-Age=300; ${attributes()}`;
    return cookieValue(receiptCookie) === permit;
  } catch {
    clearVehicleReceipt();
    return false;
  }
}

export function readVehicleReceipt(): VehicleReceipt | null {
  try {
    const permit = JSON.parse(decodeURIComponent(cookieValue(receiptCookie)));
    if (!Number.isFinite(permit.expires_at) || permit.expires_at <= Date.now()
        || !Number.isInteger(permit.parts) || permit.parts < 1 || permit.parts > 8) return null;
    let encoded = '';
    for (let index = 0; index < permit.parts; index++) {
      const part = cookieValue(`${receiptPartPrefix}${index}`);
      if (!part) return null;
      encoded += part;
    }
    const receipt = JSON.parse(decodeURIComponent(encoded));
    const keys: (keyof VehicleReceipt)[] = ['full_name', 'car_number', 'car_location', 'country_code',
      'phone_number', 'email', 'milage', 'expected_selling_price', 'condition_document_status',
      'car_details', 'year', 'version', 'message'];
    return receipt && keys.every((key) => typeof receipt[key] === 'string') && receipt.car_number
      ? receipt : null;
  } catch {
    return null;
  }
}

export function consumeVehicleReceipt(): VehicleReceipt | null {
  const receipt = readVehicleReceipt();
  clearVehicleReceipt();
  return receipt;
}

export function clearVehicleReceipt(): void {
  try {
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (name === receiptCookie || name.startsWith(receiptPartPrefix)) {
        document.cookie = `${name}=; Max-Age=0; ${attributes()}`;
      }
    }
  } catch { 
    
  }
}
