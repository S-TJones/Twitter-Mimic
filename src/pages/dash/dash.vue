<style scoped lang="scss" src="./dash.scss"></style>
<script lang="ts" src="./dash.ts"></script>
<template>
  <div class="[ dash ][ w-full ]" style="max-width: 600px;">
    <div class="[ h-12 w-full ][ flex flex-row justify-between items-center ][ px-4 mx-auto ]">
      <p class="[ text-base ]">Home</p>
      <i class="[ h-8 w-12 ]"></i>
    </div>
    <form class="[ pt-1 ][ w-full ]" method="post">
      <div class="[  ]">
        <img src="@/assets/twitter/twitter_logo.jpg" alt="user_profile_pic" class="[ rounded-full h-16 w-16 ][ flex items-center justify-center ]">
      </div>
      <div class="[  ]">
        <textarea name="tpost" id="tpost" cols="30" rows="3" placeholder="What's happening?" v-model="newTweet" class="[ w-full ]"></textarea>
        <div class="[  ]">
          <div class="[ flex flex-row justify-evenly ]">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <!-- Switch this button with a Buefy button -->
          <button type="button" @click="sendPostData(newTweet)">Tweet</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="[ my-1 ]"></div>
    <!--  -->
    <div class="post [ w-full ][ text-sm ][ border-b border-twittergrey ][ cursor-pointer ]">
      <div class="[ px-4 ][ w-full ]">
        <div class="[ flex flex-col flex-shrink flex-grow ]">
          <div class="[ flex flex-col ]">
            <div class="[ pt-3 ][ mb-1 ]"></div>
            <div class="[ flex flex-row ]">
              <div class="[ mr-3 ][ flex-shrink-0 flex justify-center ]">
                <img src="@/assets/twitter/marvel.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
              </div>
              <div class="[ pb-3 ][ flex flex-col justify-center ]">
                <div class="[ mb-1 ][ flex flex-row justify-between items-start ]">
                  <div>Marvel Entertainment <i></i> @Marvel · 23h</div>
                  <div class="[ ml-5 ][ h-5 ][ flex justify-center items-center text-center ]">...</div>
                </div>
                <div>
                  <div class="post-text">
                    In 5 {{ foobar }} days, witness the power of #Thor. <br>
                    Experience the cinematic event, Marvel Studios’ #ThorLoveAndThunder, only in theaters this Friday! Get tickets now: http://fandango.com/ThorLoveAndThunder
                  </div>
                  <div class="post-image [ mt-3 ]">
                    <div class="[ overflow-hidden ][ h-full ]">
                      <img src="@/assets/twitter/thor_love_thunder.jpg" alt="#ThorLoveAndThunder" class="[ border border-twittergreyt rounded-2xl rounded-b-none border-b-0 ][ w-full ]">
                    </div>
                    <div class="[ w-full ][ p-3 ][ rounded-2xl rounded-t-none border border-twittergreyt ]">
                      <p>From Thor</p>
                    </div>
                  </div>
                  <div class="post-buttons [ flex flex-row justify-between ][ mt-3 ]">
                    <div class="[ flex justify-start items-center ][ hover:text-twitterblue ]">
                      <b-icon icon="comment" size="is-small"></b-icon>
                      <p class="[ px-3 ]">33</p>
                    </div>
                    <div class="[ flex justify-start items-center ][ hover:text-typography-success ]">
                      <b-icon icon="retweet" size="is-small"></b-icon>
                      <p class="[ px-3 ]">247</p>
                    </div>
                    <div class="[ flex justify-start items-center ][ hover:text-button-failure ]"><!-- Check SASS colors and it's not there -->
                      <b-icon icon="heart" size="is-small"></b-icon>
                      <p class="[ px-3 ]">2465</p>
                    </div>
                    <div class="[ flex justify-start items-center ][ hover:text-twitterblue ]">
                      <b-icon icon="share" size="is-small"></b-icon>
                    </div>
                  </div>
                  <div class="promoted [ mt-3 ]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="post [ w-full ][ text-sm ][ border-b border-twittergrey ]">
      <div class="[ px-4 ][ w-full ]">
        <div class="[ flex flex-col flex-shrink flex-grow ]">
          <div class="[ flex flex-col ]">
            <div class="[ pt-3 ][ mb-1 ]"></div>
            <div class="[ flex flex-row ]">
              <div class="[ mr-3 ][ flex-shrink-0 flex justify-center ]">
                <img src="@/assets/twitter/Marques_Brownlee_cropped.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
              </div>
              <div class="[ pb-3 ][ flex flex-col justify-center ]">
                <div class="[ mb-1 ][ flex flex-row justify-between items-start ]">
                  <div>Marques Brownlee <i></i> @MKBHD · 13h</div>
                  <div class="[ ml-5 ][ h-5 ][ flex justify-center items-center text-center ]">...</div>
                </div>
                <div>
                  <div class="post-text [ w-full ]">
                    Yes yes you should definitely take lots of videos of these fireworks. You will definitely watch the videos later
                  </div>
                  <div class="post-image [ mt-3 ]">
                    <div><img src="" alt="" class="[  ]"></div>
                    <div></div>
                  </div>
                  <div class="post-buttons [ flex flex-row justify-between ][ mt-3 ]">
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="comment" size="is-small"></b-icon>
                      <p class="[ px-3 ]">343</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="retweet" size="is-small"></b-icon>
                      <p class="[ px-3 ]">1984</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="heart" size="is-small"></b-icon>
                      <p class="[ px-3 ]">37.8K</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="share" size="is-small"></b-icon>
                    </div>
                  </div>
                  <div class="promoted [ mt-3 ]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="post [ w-full ][ text-sm ][ border-b border-twittergrey ]" v-for="post in tPosts">
      <div class="[ px-4 ][ w-full ]">
        <div class="[ flex flex-col flex-shrink flex-grow ]">
          <div class="[ flex flex-col ]">
            <div class="[ pt-3 ][ mb-1 ]"></div>
            <div class="[ flex flex-row ]">
              <div class="[ mr-3 ][ flex-shrink-0 flex justify-center ]">
                <img src="@/assets/twitter/vulkno.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
              </div>
              <div class="[ pb-3 ][ flex flex-col justify-center ]">
                <div class="[ mb-1 ][ flex flex-row justify-between items-start ]">
                  <div>{{ post.pName }} <i></i> {{ post.pTag }} · {{ post.pTime }}</div>
                  <div class="[ ml-5 ][ h-5 ][ flex justify-center items-center text-center ]">...</div>
                </div>
                <div>
                  <div class="post-text [ w-full ]" @click="editPost()">
                    {{ post.pData }}
                  </div>
                  <div class="post-image [ mt-3 ]">
                    <div><img src="" alt="" class="[  ]"></div>
                    <div></div>
                  </div>
                  <div class="post-buttons [ flex flex-row justify-between ][ mt-3 ]">
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="comment" size="is-small"></b-icon>
                      <p class="[ px-3 ]">343</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="retweet" size="is-small"></b-icon>
                      <p class="[ px-3 ]">1984</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="heart" size="is-small"></b-icon>
                      <p class="[ px-3 ]">37.8K</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="share" size="is-small"></b-icon>
                    </div>
                  </div>
                  <div class="promoted [ mt-3 ]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="post [ w-full ][ text-sm ][ border-b border-twittergrey ]">
      <div class="[ px-4 ][ w-full ]">
        <div class="[ flex flex-col flex-shrink flex-grow ]">
          <div class="[ flex flex-col ]">
            <div class="[ pt-3 ][ mb-1 ]"></div>
            <div class="[ flex flex-row ]">
              <div class="[ mr-3 ][ flex-shrink-0 flex justify-center ]">
                <img src="@/assets/twitter/Marques_Brownlee_cropped.jpg" alt="user_profile_pic" class="[ h-12 w-12 ][ flex items-center justify-center ]" style="border-radius: 50%;">
              </div>
              <div class="[ pb-3 ][ flex flex-col justify-center ]">
                <div class="[ mb-1 ][ flex flex-row justify-between items-start ]">
                  <div>Marques Brownlee <i></i> @MKBHD · 13h</div>
                  <div class="[ ml-5 ][ h-5 ][ flex justify-center items-center text-center ]">...</div>
                </div>
                <div>
                  <div class="post-text [ w-full ]">
                    <b-table
                      :data="empty ? [] : data"
                      :bordered="bordered"
                      :striped="striped"
                      :narrowed="narrowed"
                      :hoverable="hoverable"
                      :loading="loading"
                      :focusable="focusable"
                      :mobile-cards="mobileCards">

                      <b-table-column field="id" label="ID" width="40" :td-attrs="columnTdAttrs" numeric v-slot="props">
                        {{ props.row.id }}
                      </b-table-column>

                      <b-table-column field="first_name" label="First Name" :td-attrs="columnTdAttrs" v-slot="props">
                        {{ props.row.first_name }}
                      </b-table-column>

                      <b-table-column field="last_name" label="Last Name" :td-attrs="columnTdAttrs" v-slot="props">
                        {{ props.row.last_name }}
                      </b-table-column>

                      <b-table-column field="date" label="Date" :th-attrs="dateThAttrs" :td-attrs="columnTdAttrs" centered v-slot="props">
                        <span class="tag is-success">
                          {{ new Date(props.row.date).toLocaleDateString() }}
                        </span>
                      </b-table-column>

                      <b-table-column label="Gender" :td-attrs="columnTdAttrs" v-slot="props">
                        <span>
                          <b-icon
                            v-if="props.row.id !== 'Total'"
                            pack="fas"
                            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                          </b-icon>
                            {{ props.row.gender }}
                        </span>
                      </b-table-column>

                    </b-table>
                  </div>
                  <div class="post-image [ mt-3 ][ w-full ]">
                    <div><img src="" alt="" class="[  ]"></div>
                    <div></div>
                  </div>
                  <div class="post-buttons [ flex flex-row justify-between ][ mt-3 ]">
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="comment" size="is-small"></b-icon>
                      <p class="[ px-3 ]">343</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="retweet" size="is-small"></b-icon>
                      <p class="[ px-3 ]">1984</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="heart" size="is-small"></b-icon>
                      <p class="[ px-3 ]">37.8K</p>
                    </div>
                    <div class="[ flex justify-start items-center ]">
                      <b-icon icon="share" size="is-small"></b-icon>
                    </div>
                  </div>
                  <div class="promoted [ mt-3 ]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>