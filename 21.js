// Add to existing script.js
function toggleFavorite(listingId) {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'login.html'; return false; }
  
  const favorites = getFavorites(user.id);
  const index = favorites.indexOf(listingId);
  
  if (index === -1) { favorites.push(listingId); alert('❤️ Saved to favorites!'); }
  else { favorites.splice(index, 1); alert('💔 Removed from favorites'); }
  
  localStorage.setItem(FAVORITES_KEY, JSON.stringify({ [user.id]: favorites }));
  return true;
}

function isFavorite(listingId) {
  const user = getCurrentUser();
  if (!user) return false;
  const favorites = getFavorites(user.id);
  return favorites.includes(listingId);
}