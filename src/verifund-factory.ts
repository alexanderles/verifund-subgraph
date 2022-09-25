import { CampaignCreated as CampaignCreatedEvent } from "../generated/VerifundFactory/VerifundFactory"
import { CampaignCreated } from "../generated/schema"

export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new CampaignCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.c = event.params.c
  entity.whiteList = event.params.whiteList
  entity.targetAmount = event.params.targetAmount
  entity.save()
}
