'use client';

import { useUser, useAuth } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';
import { syncUserProfile } from 'lib/api/userSync';

export default function UserSyncer() {
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const hasSynced = useRef(false);

  useEffect(() => {
    if (isSignedIn && !hasSynced.current) {
      syncUserProfile(getToken).catch(console.error);
      hasSynced.current = true;
      console.log('User profile synced (home)');
    }
    if (!isSignedIn) {
      hasSynced.current = false;
    }
  }, [isSignedIn, getToken]);

  return null;
}
