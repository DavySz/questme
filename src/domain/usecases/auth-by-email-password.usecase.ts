export interface AuthByEmailPassword {
  auth: (email: string, password: string) => void;
}
