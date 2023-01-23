const URL = 'https://api.github.com/users/DouglasD18/repos';
export class GitHubApi {
  async get(name: string): Promise<{ url: string, description: string }> {
    try {
      const data = await fetch(URL);
      const response = await data.json();
      
      const project = response.find((value: { name: string }) => value.name === name);
  
      const url = project.html_url;
      const description = project.description;
      console.log(url, description);
  
      return {
        url,
        description,
      }
    } catch (error) {
      console.log(error);
    }
  }
}
