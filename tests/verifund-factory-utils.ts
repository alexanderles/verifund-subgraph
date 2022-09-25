import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CampaignCreated } from "../generated/VerifundFactory/VerifundFactory"

export function createCampaignCreatedEvent(
  c: Address,
  whiteList: Array<Address>,
  targetAmount: BigInt
): CampaignCreated {
  let campaignCreatedEvent = changetype<CampaignCreated>(newMockEvent())

  campaignCreatedEvent.parameters = new Array()

  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("c", ethereum.Value.fromAddress(c))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "whiteList",
      ethereum.Value.fromAddressArray(whiteList)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "targetAmount",
      ethereum.Value.fromUnsignedBigInt(targetAmount)
    )
  )

  return campaignCreatedEvent
}
