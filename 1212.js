function renderCard(listing) {
  const price = listing.rent.toLocaleString('en-BD');
  const user = getCurrentUser();
  const isFav = user ? isFavorite(listing.id) : false;
  const favIcon = isFav ? '❤️' : '🤍';
  
  return `<div class="listing-card">
    <div class="card-header">
      <div class="card-emoji">${listing.emoji}</div>
      <div class="card-badges">
        ${listing.verified ? '<span class="badge-verified">✓ Verified</span>' : ''}
        <span class="badge-type">${listing.type}</span>
        ${user ? `<button onclick="toggleFavorite(${listing.id}); location.reload();" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">${favIcon}</button>` : ''}
      </div>
    </div>
    <div class="card-body">
      <div class="card-title">${listing.title}</div>
      <div class="card-location">📍 ${listing.location}</div>
      <div class="card-meta">
        <span>🛏 ${listing.beds} Bed</span>
        <span>🚿 ${listing.baths} Bath</span>
      </div>
      <div class="card-desc">${listing.description.substring(0, 100)}...</div>
    </div>
    <div class="card-footer">
      <div class="card-price">৳${price}<small>/mo</small></div>
      <a href="contact.html?id=${listing.id}" class="btn-contact">📞 View Details</a>
    </div>
  </div>`;
}