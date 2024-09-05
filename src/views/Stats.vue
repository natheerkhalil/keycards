<template>
    <div>
      <h2>Netlify Stats Overview</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h3>Sites</h3>
        <ul>
          <li v-for="site in sites" :key="site.id">
            <h4>{{ site.name }}</h4>
            <p><strong>URL:</strong> {{ site.url }}</p>
            <p><strong>Last Deploy:</strong> {{ site.published_deploy.deploy_time }}</p>
            <p><strong>Build Minutes:</strong> {{ site.build_minutes_used }}</p>
            <p><strong>Bandwidth:</strong> {{ site.bandwidth_used }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { getSites, getSiteDetails, getSiteDeploys, getSiteAnalytics } from '../services/netlifyService';
  
  export default {
    data() {
      return {
        sites: [],
        loading: true,
      };
    },
    async created() {
      try {
        const sitesData = await getSites();
        // For each site, you might want to get more details or analytics.
        for (let site of sitesData) {
          const siteDetails = await getSiteDetails(site.id);
          const siteAnalytics = await getSiteAnalytics(site.id);
          site.build_minutes_used = siteDetails.account.billable_build_minutes; // Assuming this is where you get build minutes
          site.bandwidth_used = siteAnalytics.total_pageviews || 0; // Example usage, you might need to adjust according to the analytics data structure
        }
        this.sites = sitesData;
      } catch (error) {
        console.error('Error fetching Netlify data:', error);
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
  }
  </style>
  