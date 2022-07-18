import { AppStore } from '@/store/app';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'trending',
})


class Trending extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public active = false;
  
  public trends: {location: string; name: string; tweet_count: string}[] = [
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
  // Props
  // --------------------------------------------------------------------------
  @Prop({ default: 'default' }) public customProp!: string;
  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  /**
   * getTrends
   */
  public getTrends() {
    return this.trends;
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------
  // @Watch('getPopUp')
  // public onGetPopUpChange(val: boolean) {
    
  //   alert('B: '+val);
  //   this.active = val;
  // }

  @Watch('getTrends')
  public onGetTrendsChange(val: []) {
    this.trends = val;
  }
  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  Trending as default,
  Trending,
};
