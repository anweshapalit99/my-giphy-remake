class AppService {
  fetchGiphy = async (url: string) => {
    if (window !== undefined) {
      try {
        const response = await window.fetch(url);
        const data = await response.json();
        return data
      } catch (e) {
        console.log("Error while fetching", e);
      }
    }
  };
}
const instanceAppService = new AppService()
export default instanceAppService