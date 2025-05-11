'use client';

import { useAppointmentStore, useUiStore } from '../../../stores';
import { useSession } from 'next-auth/react';

export default function AppointmentsPage() {
  const { appointments, selectAppointment } = useAppointmentStore();
  const { appointmentFilter } = useUiStore();

  console.log('AppointmentsPage Rendered ...');

  const { data, status } = useSession();

  console.log('session ---->>', data, status);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-gray-900 text-xs">نوبت های حضوری</div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => {}}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Schedule Appointment
          </button>
        </div>
      </div>
      {/* <UserProfile/> */}
    </div>
  );
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
