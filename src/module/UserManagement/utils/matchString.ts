export const matchString = (field: unknown, searchTerm: string): boolean => {
  if (!field) return false;
  return String(field).toLowerCase().includes(searchTerm.toLowerCase());
};
