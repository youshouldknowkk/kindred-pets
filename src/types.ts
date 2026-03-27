export enum AdoptionStatus {
  AVAILABLE = 'available',
  PENDING = 'pending',
  ADOPTED = 'adopted',
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  images: string[];
  status: AdoptionStatus;
  organizationId: string;
  healthInfo: {
    vaccinated: boolean;
    dewormed: boolean;
    neutered: boolean;
    lastCheckup?: string;
  };
  tags: string[];
  createdAt: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  role: 'user' | 'admin' | 'org_admin';
  preferences?: {
    petType?: string[];
    livingEnvironment?: string;
    experience?: string;
  };
}

export interface AdoptionApplication {
  id: string;
  userId: string;
  petId: string;
  status: 'submitted' | 'reviewing' | 'approved' | 'rejected';
  submittedAt: string;
  updatedAt: string;
  questionnaire: Record<string, any>;
}

export interface HealthLog {
  id: string;
  petId: string;
  type: 'vaccine' | 'deworm' | 'checkup' | 'medication';
  title: string;
  date: string;
  notes?: string;
  nextReminder?: string;
}

export interface DiaryEntry {
  id: string;
  petId: string;
  userId: string;
  content: string;
  media: string[];
  mood?: string;
  breedIdentified?: string;
  createdAt: string;
}
