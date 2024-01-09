export function Rating({ rating }) {
    console.log(77777, rating)
    const stars = [];
    let fullStars;
    if(rating)
    fullStars = Math.floor(rating);
    else 
    fullStars = 0

    let hasHalfStar
    if(rating)
     hasHalfStar = rating % 1 !== 0;
    else
     hasHalfStar =0
  
    // Full stars
    for (let i = 0; i < fullStars-1; i++) {
      if(fullStars)
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
  