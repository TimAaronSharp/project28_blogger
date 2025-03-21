import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { Account } from "@/models/Account.js"


class ProfilesService{
  async getProfileById(profileId) {
    AppState.activeProfile = null
    const profile = await api.get(`api/profiles/${profileId}`)
    const activeProfile = new Account(profile.data)
    AppState.activeProfile = activeProfile
    logger.log(AppState.activeProfile)
  }

}

export const profilesService = new ProfilesService()