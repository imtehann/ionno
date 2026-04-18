function searchListings() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  let all = getAllListings();
  if (searchTerm) all = all.filter(l => l.title.toLowerCase().includes(searchTerm) || l.location.toLowerCase().includes(searchTerm));
  document.getElementById('listingsGrid').innerHTML = all.map(l => renderCard(l)).join('');
}