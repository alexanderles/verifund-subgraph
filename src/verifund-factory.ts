import { 
  CampaignCreated as CampaignCreatedEvent
} from "../generated/VerifundFactory/VerifundFactory"

import { CampaignCreated } from "../generated/schema"
import { ByteArray, Bytes } from "@graphprotocol/graph-ts"

export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new CampaignCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.c = event.params.c
  entity.targetAmount = event.params.targetAmount
  entity.save()
}
