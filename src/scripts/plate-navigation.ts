const pendingPlateCookie = 'car_valuation_pending_plate';

function cookieAttributes(): string {
  return `Path=/; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`;
}

function readPendingPlate(): string {
  const cookie = document.cookie.split(';').map((value) => value.trim())
    .find((value) => value.startsWith(`${pendingPlateCookie}=`));
  return cookie ? decodeURIComponent(cookie.slice(pendingPlateCookie.length + 1)) : '';
}

export function consumePendingPlate(): string {
  try {
    return readPendingPlate();
  } catch {
    return '';
  } finally {
    document.cookie = `${pendingPlateCookie}=; Max-Age=0; ${cookieAttributes()}`;
  }
}

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.matches('[data-plate-form]')
      || event.defaultPrevented || document.getElementById('valuation-details-form')) return;

  event.preventDefault();
  const input = form.querySelector<HTMLInputElement>('input[name="plate"]');
  const plate = input?.value.trim().toUpperCase();
  if (!input || !plate) {
    input?.focus();
    return;
  }

  try {
    document.cookie = `${pendingPlateCookie}=${encodeURIComponent(plate)}; Max-Age=300; ${cookieAttributes()}`;
    if (readPendingPlate() !== plate) throw new Error('Cookies are unavailable.');
    window.location.assign('/');
  } catch {
    input.setCustomValidity('Please allow cookies to continue with your car valuation.');
    input.reportValidity();
    input.addEventListener('input', () => input.setCustomValidity(''), { once: true });
  }
});
