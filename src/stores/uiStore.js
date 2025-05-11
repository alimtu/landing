import { create } from 'zustand'

const useUiStore = create((set) => ({
  patientFilter: 'all',
  appointmentFilter: 'today',
  
  setPatientFilter: (filter) => set({ patientFilter: filter }),
  setAppointmentFilter: (filter) => set({ appointmentFilter: filter }),
}))

export default useUiStore 