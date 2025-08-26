import Link from 'next/link';
import React from 'react';

const MembersPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to the Members Page</h1>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default MembersPage;
