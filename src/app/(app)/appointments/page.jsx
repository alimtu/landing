'use client';

import { useAppointmentStore, useUiStore } from '../../../stores';

export default function AppointmentsPage() {
  return <div>Hello</div>;
}

// const UserProfile = () => {
//   const { data: user, error, isLoading } = useGet(API_ENDPOINTS.USER_PROFILE);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>{user.name}</h1>
//     </div>
//   );
// };
