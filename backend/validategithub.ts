export async function validate(user: string){
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (response.status === 404) {
      return false;
    }
    return true;
}