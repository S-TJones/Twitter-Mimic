import { AppStore } from '@/store/app';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'dash',
})
class Dash extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public newTweet = "";
  public data = [
    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' },
    { 'id': 'Total', 'gender': '2 Females, 3 Males' },
  ];

  public isEmpty = false;
  public isBordered = false;
  public isStriped = false;
  public isNarrowed = false;
  public isHoverable = false;
  public isFocusable = false;
  public isLoading = false;
  public hasMobileCards = true;

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------
  /**
   * get getFoo
   */
  public get foobar(): string {
    return AppStore.fooBar;
  }

  public get empty () : boolean {
    return this.isEmpty;
  }

  public get bordered () : boolean {
    return this.isBordered;
  }

  public get striped () : boolean {
    return this.isStriped;
  }

  public get narrowed () : boolean {
    return this.isNarrowed;
  }

  public get hoverable () : boolean {
    return this.isHoverable;
  }

  public get focusable () : boolean {
    return this.isFocusable;
  }

  public get loading () : boolean {
    return this.isLoading;
  }

  public get mobileCards () : boolean {
    return this.hasMobileCards;
  }

  /**
   * getTPosts
   */
  public get tPosts() {
    return AppStore.twitterPosts;
  }

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  public dateThAttrs(column:any) {
    return column.label === 'Date' ? {
      title: 'This title is sponsored by "th-attrs" prop',
      class: 'has-text-success'
    } : null;
  }

  public columnTdAttrs(row:any, column:any) {
    if (row.id === 'Total') {
      if (column.label === 'ID') {
        return {
          colspan: 4,
          class: 'has-text-weight-bold',
          style: {
            'text-align': 'left !important'
          }
        };
      } else if (column.label === 'Gender') {
        return {
          class: 'has-text-weight-semibold'
        };
      } else {
        return {
          style: {display: 'none'}
        };
      }
    }

    return null;
  }

  /**
   * getPostData
   */
  public sendPostData(postData: string) {
    AppStore.createPost(postData);
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  Dash as default,
  Dash,
};
