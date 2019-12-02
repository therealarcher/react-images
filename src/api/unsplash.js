import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 77aa07866a034e54127275e5c0ebbe49fdd5351d87f036a193cfd8ea20eafb65"
  }
});
