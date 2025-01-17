import { Grid, VStack } from '@fuels/ui';
import { LoadingBox } from '~/systems/Core/components/LoadingBox/LoadingBox';
import { TxListLoader } from '~/systems/Transaction/component/TxList/TxListLoader';

export function BlockScreenSkeleton() {
  return (
    <VStack>
      <Grid className="grid-rows-3 tablet:grid-rows-1 tablet:grid-cols-3 gap-6 mb-8">
        <LoadingBox className="h-[100px]" />
        <LoadingBox className="h-[100px]" />
        <LoadingBox className="h-[100px]" />
      </Grid>
      <Grid className="grid grid-cols-[1fr_2fr] gap-6">
        <LoadingBox className="h-6" />
        <div className="col-start-1 col-end-3">
          <TxListLoader />
        </div>
      </Grid>
    </VStack>
  );
}
