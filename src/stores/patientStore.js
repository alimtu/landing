import { create } from 'zustand'

const usePatientStore = create((set) => ({
  // Patient data
  patients: [],
  selectedPatientId: null,
  selectedPatient: null,
  
  // Patient actions
  setPatients: (patients) => set({ patients }),
  addPatient: (patient) => set((state) => ({ 
    patients: [...state.patients, patient] 
  })),
  updatePatient: (patientId, updatedData) => set((state) => ({
    patients: state.patients.map(patient => 
      patient.id === patientId ? { ...patient, ...updatedData } : patient
    )
  })),
  deletePatient: (patientId) => set((state) => ({
    patients: state.patients.filter(patient => patient.id !== patientId)
  })),
  
  // Patient selection
  selectPatient: (patientId) => set((state) => ({
    selectedPatientId: patientId,
    selectedPatient: state.patients.find(p => p.id === patientId) || null
  })),
  clearSelectedPatient: () => set({ 
    selectedPatientId: null,
    selectedPatient: null 
  }),
}))

export default usePatientStore 