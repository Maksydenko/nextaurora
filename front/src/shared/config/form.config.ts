/**
 * Shared validation limits and regex patterns for demo forms and inputs.
 */
export const formConfig = {
  description: {
    max: 400
  },
  email: {
    max: 254,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i
  },
  name: {
    min: 2,
    pattern: /^[^\d]*$/
  },
  phone: {
    mobile: {
      max: 32
    }
  },
  title: {
    max: 40
  }
}
