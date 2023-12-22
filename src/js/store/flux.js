const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
		peopleList: [],
		planetList: []
	  },
	  actions: {
		fetchPeople: async () => {
		  const URL = "https://swapi.dev/api/people/";
		  const CONFIG = {
			method: "GET",
			headers: {
			  "Content-type": "application/json"
			}
		  };
		  const response = await fetch(URL, CONFIG);
		  const json = await response.json();
  
		  console.log(">>DATA>>", json);
		  setStore({ peopleList: json.results });
		},
		fetchPlanets: async () => {
		  const URL = "https://swapi.dev/api/planets/";
		  const CONFIG = {
			method: "GET",
			headers: {
			  "Content-type": "application/json"
			}
		  };
		  const response = await fetch(URL, CONFIG);
		  const json = await response.json();
  
		  console.log(">>DATA>>", json);
		  setStore({ planetList: json.results });
		},
		setFavorites: (name) => {
		  const { favorites } = getStore();
		  const updatedFavorites = [...favorites, name];
		  setStore({ favorites: updatedFavorites });
		},
		deleteFavorite: (name) => {
		  const { favorites } = getStore();
		  const updatedFavorites = favorites.filter((favorite) => favorite !== name);
		  setStore({ favorites: updatedFavorites });
		}
	  }
	};
  };
  
  export default getState;
  