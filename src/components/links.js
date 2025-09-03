
import Link from 'next/link'

export default function Links() {
  return (
   <> 
        <Link href="/shop" class="text-white">Shop</Link>
        <Link href="/downloads" class="text-white">Downloads</Link>
        <Link href="/links" class="text-white">Links</Link>
        <Link href="/about" class="text-white">About Us</Link>
        <Link href="/privacy" class="text-white">Privacy</Link>
        <Link href="/terms" class="text-white">Terms</Link>
        <Link href="/taxi-drivers" class="text-white">For Taxi Drivers</Link>
    </>
  );
}
