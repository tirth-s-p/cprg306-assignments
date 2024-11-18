"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>

      {!user ? (
        <div>
          <p>Please sign in to continue.</p>
          <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        </div>
      ) : (
        <div>
          <p>Signed in as {user.displayName} ({user.email}).</p>
          <button onClick={firebaseSignOut}>Sign out</button>
          <br />
          <Link href="/week-9/shopping-list">Continue to your Shopping List</Link>
        </div>
      )}
    </div>
  );
}
