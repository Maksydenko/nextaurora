/**
 * One row of mock user data for the UI table demo.
 */
export interface UiTableRow {
  department: string
  email: string
  id: string
  name: string
  role: string
  status: 'Away' | 'Busy' | 'Online'
}
