import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { Account } from "@/models/Account.js"


class ProfilesService{
  async getProfileById(profileId) {
    //NOTE Sets the AppState.activeProfile to null. This is only for cosmetic/user experience reasons. If there is a profile stored here already (say from clicking on another profile before this one) that data will still be there and render to the DOM slightly before the new profile data, which can be seen just before it changes.
    AppState.activeProfile = null
    const profile = await api.get(`api/profiles/${profileId}`)
    const activeProfile = new Account(profile.data)
    AppState.activeProfile = activeProfile
    logger.log(AppState.activeProfile)
  }

}

export const profilesService = new ProfilesService()