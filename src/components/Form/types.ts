export interface IFormValues {
  name: string;
  email: string;
  message: string;
}

export interface IFormErrors extends IFormValues {
  onSubmit: string;
}
