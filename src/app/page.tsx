import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { GoSmiley } from 'react-icons/go';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hi Milton Rodrigues</h1>
      <Button
        as={Link}
        href="/members"
        color="danger"
        variant="bordered"
        startContent={<GoSmiley />}
      >
        Click me!
      </Button>
    </div>
  );
}
