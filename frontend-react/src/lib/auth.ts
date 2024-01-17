export const setBearerToken = (token: string, expires: string) => {
    // Set the cookie with the name 'accessToken'
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 90);
    document.cookie = `accessToken=${token}; expires=${expirationDate.toUTCString()}; path=/; Secure`;
    document.cookie = `accessTokenExpires=${expires}; expires=${expirationDate.toUTCString()}; path=/; Secure`;
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

export const getTokenExpires = () => {
    const cookies = document.cookie.split(';');
    let expires;
  
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'accessTokenExpires') {
        expires = value;
        break;
      }
    }
  
    return expires ? parseInt(expires) : 0;
}

export const logout = () => {
    setBearerToken('', '')
    return null;
}