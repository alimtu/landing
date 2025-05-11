import { create } from 'zustand'

const useAppointmentStore = create((set) => ({
  // Appointment data
  appointments: [],
  selectedAppointmentId: null,
  selectedAppointment: null,
  
  // Appointment actions
  setAppointments: (appointments) => set({ appointments }),
  addAppointment: (appointment) => set((state) => ({ 
    appointments: [...state.appointments, appointment] 
  })),
  updateAppointment: (appointmentId, updatedData) => set((state) => ({
    appointments: state.appointments.map(appointment => 
      appointment.id === appointmentId ? { ...appointment, ...updatedData } : appointment
    )
  })),
  deleteAppointment: (appointmentId) => set((state) => ({
    appointments: state.appointments.filter(appointment => appointment.id !== appointmentId)
  })),
  
  // Appointment selection
  selectAppointment: (appointmentId) => set((state) => ({
    selectedAppointmentId: appointmentId,
    selectedAppointment: state.appointments.find(a => a.id === appointmentId) || null
  })),
  clearSelectedAppointment: () => set({ 
    selectedAppointmentId: null,
    selectedAppointment: null 
  }),
  
  // Appointment status
  updateAppointmentStatus: (appointmentId, status) => set((state) => ({
    appointments: state.appointments.map(appointment => 
      appointment.id === appointmentId ? { ...appointment, status } : appointment
    )
  })),
}))

export default useAppointmentStore 