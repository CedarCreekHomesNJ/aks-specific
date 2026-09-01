const KEY = 'aks_specific_links'

export function getLinks() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

export function saveLink({ type, code, label }) {
  try {
    const links = getLinks()
    const existing = links.find((l) => l.type === type && l.code === code)
    if (existing) {
      existing.label = label
      existing.updatedAt = Date.now()
    } else {
      links.push({ type, code, label, updatedAt: Date.now() })
    }
    links.sort((a, b) => b.updatedAt - a.updatedAt)
    localStorage.setItem(KEY, JSON.stringify(links))
  } catch (e) {
    // localStorage unavailable — nothing to do
  }
}

export function removeLink(type, code) {
  try {
    const links = getLinks().filter((l) => !(l.type === type && l.code === code))
    localStorage.setItem(KEY, JSON.stringify(links))
  } catch (e) {
    // ignore
  }
}
