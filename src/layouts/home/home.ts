import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import AppFooter from '@/components/app-footer';
import AsideMenu from '@/components/aside-menu';

@Component({
  components: {
    AppFooter,
    AsideMenu,
  },
  name: 'home',
})
class Home extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  private trends: {location: string; name: string; tweet_count: string}[] = [
    {
      'location': 'Trending in Jamaica',
      'name': 'WhatsApp',
      'tweet_count': '271K'
    },
    {
      'location': 'Gaming . Trending',
      'name': 'Ubisoft',
      'tweet_count': '12.3K'
    },
    {
      'location': 'Gaming . Trending',
      'name': 'Xbox One',
      'tweet_count': '6,857'
    },
    {
      'location': 'Gaming . Trending',
      'name': '#AssasinsCreed',
      'tweet_count': ''
    },
    {
      'location': 'Trending in Jamaica',
      'name': 'Kartel',
      'tweet_count': '2,799'
    },
    {
      'location': 'Trending in Jamaica',
      'name': 'Montego Bay',
      'tweet_count': ''
    },
    {
      'location': 'Burger King . Trending',
      'name': 'Burger King',
      'tweet_count': '17.2K'
    },
    {
      'location': 'Gaming . Trending',
      'name': '#XboxGamePass',
      'tweet_count': '1660'
    },
  ];

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  /**
   * getTrends
   */
  public getTrends() {
    return this.trends;
  }

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  public async navigate(path: string, params?: Dictionary<string>) {
    await this.$router.push({ path, params });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Home as default,
  Home,
};
