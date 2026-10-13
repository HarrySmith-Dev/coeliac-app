export const toSafeUrl = (value?: string) => {
  const firstValue = value?.split(';')[0].trim()

  if (!firstValue) {
    return undefined
  }

  const candidate = /^[a-z][a-z\d+.-]*:/i.test(firstValue) ? firstValue : `https://${firstValue}`

  try {
    const url = new URL(candidate)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined
  } catch {
    return undefined
  }
}
