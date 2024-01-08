export function Rating({ rating }) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{ color: 'gold' }}>&#9733;</span>);
    }
  
    // Half star
    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ position: 'relative' }}>
          <span style={{ color: 'gold' }}>&#9733;</span>
          <span style={{ position: 'absolute', width: '50%', overflow: 'hidden', color: 'grey' }}>&#9733;</span>
        </span>
      );
    }
  
    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ color: 'grey' }}>&#9734;</span>);
    }
  
    return <div>{stars}</div>;
  }
  