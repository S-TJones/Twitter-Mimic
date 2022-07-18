import { Post } from '@/entities';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from './index';

const MODULE_NAME = 'App';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
  private fooBarVal = 'TESTING';

  // Post Data
  private _twitterPosts: Post[] = [];

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
  public createPost(value: string) {
    this.addPost(value);
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
  private addPost(post: string) {
    const newPost = {
      pName: 'Shemar Jones', pTag: '@Vul_K_No', pTime: '4h', pData: post
    };

    this._twitterPosts.push(newPost);
  }
}

const app = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
    app as AppStore,
};

