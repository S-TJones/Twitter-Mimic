import { Post } from '@/entities';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import { TransactionService } from '@/services/transaction-service';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from './index';

const MODULE_NAME = 'App';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
  private fooBarVal = 'TESTING';

  // Post Data
  private _twitterPosts: Post[] = [{
    pName: 'Shemar Jones', pTag: '@Vul_K_No', pTime: '4h', pData: 'New Post on Twitter!'
  }];

  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------

  public get fooBar() {
    return this.fooBarVal;
  }

  public get twitterPosts() : Post[] {
    return this._twitterPosts;
  }

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------

  @MultiParamAction()
  public async loadData() {
    const response = await TransactionService.getData();

    if (response.success === true) {
      console.log(response.data);
      const newPost: Post = {
        pName: 'Shemar Jones', pTag: '@Vul_K_No', pTime: '4h', pData: 'Testing a GET request!!'
      };
      this.addPost(newPost);
    }
  }


  @MultiParamAction()
  public initializeFooBar() {
    this.setFooBar('Hello World');
  }

  @MultiParamAction()
  public resetFooBar() {
    return null;
  }

  @MultiParamAction()
  public setCustomFooBar(value: string) {
    return value;
  }

  @MultiParamAction()
  public async createPost(value: string) {
    const newPost: Post = {
      pName: 'Shemar Jones', pTag: '@Vul_K_No', pTime: '4h', pData: value
    };

    const response = await TransactionService.postData(newPost);
    if (response.success === true) {
      // newPost.id = response.data.id;
      this.addPost(newPost);
    }
  }

  @MultiParamAction()
  public async getRidOfPost(value: number) {

    const response = await TransactionService.deleteData();
    if (response.success === true) {
      // newPost.id = response.data.id;
      this.deletePost(value);
    } else {
      console.log("ERROR on DELETE");
    }
  }

  @MultiParamAction({ rawError: true})
  public async updatePost(editData: string, editNum: number) {

    const response = await TransactionService.putData();

    if (response.success === true) {
      console.log("The response is: " + JSON.stringify(response.data.obj));
      
      // Get new Post data
      response.data.obj.postId = editNum;
      response.data.obj.postMessage = editData;
      let postObj = response.data.obj;
      // let postObj = {
      //     "obj":{
      //       "postId": editNum,
      //       "postMessage": editData
      //   }
      // };
      
      // Replace old Post with New one
      this.replacePost(postObj);
    }
  }

  // ------------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------------

  @Mutation
  private setFooBar(value: string) {
    this.fooBarVal = value;
  }

  /**
   * addPost
   */
  @Mutation
  private addPost(post: Post) {
    this._twitterPosts.push(post);
  }

  @Mutation
  private deletePost(indexNum: number) {
    this._twitterPosts.splice(indexNum, 1);
  }

  // Insert post into original spot/ Replace post
  @Mutation
  private replacePost(obj:any) {
    let postM = obj.postMessage;
    let id = obj.postId;

    console.log("This list: " + JSON.stringify(this._twitterPosts));
    console.log("The ID is: " + id);
    console.log("The post is: " + JSON.stringify(this._twitterPosts[id]));
    console.log("The new message is: " + postM);

    const newPost: Post = {
      pName: 'Shemar Jones', pTag: '@Vul_K_No', pTime: '4h', pData: postM
    };
    this._twitterPosts.splice(id, 1, newPost);
    console.log("The new list: " + JSON.stringify(this._twitterPosts));
  }
}

const app = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
    app as AppStore,
};

