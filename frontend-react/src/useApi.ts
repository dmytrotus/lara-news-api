export const getPosts = async () => {
    const token = '2|3tYeljWbYKclAhfDgpVpbdCaMNLI2ZkChkjQ15Pa6989129a';
    const res = await fetch(`http://localhost:7717/api/posts`, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
    })
    return res.json()
}