export const setBearerToken = (token: string) => {
    // Set the cookie with the name 'accessToken'
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 90);
    document.cookie = `accessToken=${token}; expires=${expirationDate.toUTCString()}; path=/; Secure`;
}

export const getBearerToken = () => {
    const cookies = document.cookie.split(';');
    let storedToken;
  
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'accessToken') {
        storedToken = value;
        break;
      }
    }
  
    return storedToken;
}
