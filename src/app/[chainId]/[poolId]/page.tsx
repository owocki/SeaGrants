import { TPoolData, TPoolMetadata } from "@/app/types";
import PoolDetail from "@/components/pool/PoolDetail";
import Container from "@/components/shared/Container";
import { getIPFSClient } from "@/services/ipfs";
import { graphqlEndpoint, getMicroGrantsRecipientsQuery } from "@/utils/query";
import request from "graphql-request";

export default async function Pool({
  params,
}: {
  params: { chainId: string; poolId: string };
}) {
  const response: any = await request(
    graphqlEndpoint,
    getMicroGrantsRecipientsQuery,
    { chainId: params.chainId, poolId: params.poolId },
  );

  const pool: TPoolData = response.microGrant;
  const poolMetadata: TPoolMetadata = await getIPFSClient().fetchJson(
    pool.pool.metadataPointer,
  );

  return (
    <Container>
      <PoolDetail pool={pool} metadata={poolMetadata} />
    </Container>
  );
}
