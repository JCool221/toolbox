export function handleFormSubmit(
  event: SubmitEvent,
  callbacks: Record<string, (data: Record<string, FormDataEntryValue>, form: HTMLFormElement) => void>): void {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  // Identify which button was clicked
  const submitter = event.submitter as HTMLButtonElement | null
  const action = submitter?.value || 'default'

  const payload: any = {}
  for (const [key, value] of formData.entries()) {
    payload[key] = value
  }

  // Optional: dispatch based on action value
  if (action in callbacks) {
    callbacks[action](payload, form)
  } else if ('default' in callbacks) {
    callbacks.default(payload, form)
  } else {
    console.warn(`No callback found for action: ${action}`)
  }
}
