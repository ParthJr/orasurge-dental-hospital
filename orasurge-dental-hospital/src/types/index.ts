export interface TreatmentItem {
  id: string;
  modCode: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  actionLabel: string;
  accentColor: 'lime' | 'blue' | 'white' | 'red';
  icon: string;
  isAnchor?: boolean;
  fullDetails: {
    overview: string;
    diagnosticEquipment: string[];
    typicalDuration: string;
    clinicalPhases: string[];
    suitableFor: string;
  };
}

export interface ConsultationFormData {
  fullName: string;
  mobileNumber: string;
  careCategory: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  privacyConsent: boolean;
}
