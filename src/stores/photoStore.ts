import { defineStore } from "pinia";
import axios from "axios";

interface Photo {
  id: string;
  urls: { thumb: string; full: string };
  user: { name: string; location?: string };
  description?: string;
}

export const usePhotoStore = defineStore("photo", {
  state: () => ({
    photos: [] as Photo[],
    loading: false,
    searchQuery: "",
    selectedPhoto: null as Photo | null,
    page: 1,
  }),
  actions: {
    async fetchPhotos(query = "") {
      this.loading = true;
      this.searchQuery = query;
      this.photos = [];
      this.page = 1;
      try {
        const response = await axios.get(
          `https://api.unsplash.com/${query ? "search/photos" : "photos"}`,
          {
            headers: {
              Authorization: `Client-ID ${
                import.meta.env.VITE_UNSPLASH_ACCESS_KEY
              }`,
            },
            params: {
              query,
              per_page: query ? 50 : 8,
              page: this.page,
            },
          }
        );

        if (query) {
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }

        this.photos = query ? response.data.results : response.data;
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        this.loading = false;
      }
    },
    selectPhoto(photo: Photo) {
      this.selectedPhoto = photo;
    },
    clearSelectedPhoto() {
      this.selectedPhoto = null;
    },
    async loadMore() {
      if (this.loading) return;
      this.loading = true;
      this.page++;
      try {
        const response = await axios.get(
          `https://api.unsplash.com/${
            this.searchQuery ? "search/photos" : "photos"
          }`,
          {
            headers: {
              Authorization: `Client-ID ${
                import.meta.env.VITE_UNSPLASH_ACCESS_KEY
              }`,
            },
            params: {
              query: this.searchQuery,
              per_page: 12,
              page: this.page,
            },
          }
        );

        const newPhotos = this.searchQuery
          ? response.data.results
          : response.data;
        this.photos.push(...newPhotos);
      } catch (error) {
        return {
          error: "Error fetching photos:",
          errorMessage: error,
        };
      } finally {
        this.loading = false;
      }
    },
  },
});
