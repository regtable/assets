param([Parameter(Mandatory=$true)][ValidateSet('monolith','worksite','garden','original')][string]$Variant)
$ErrorActionPreference = 'Stop'
$variantStem = if ($Variant -eq 'garden') { 'zen-garden-batched' } else { 'zen-' + $Variant }
$glbStem = if ($Variant -eq 'garden') { 'zen-original' } else { $variantStem }
foreach ($extension in @('mjs','ts')) {
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot ($variantStem + '.' + $extension)) -Destination (Join-Path $PSScriptRoot ('zen_corner.' + $extension)) -Force
}
Copy-Item -LiteralPath (Join-Path $PSScriptRoot ($glbStem + '.glb')) -Destination (Join-Path $PSScriptRoot 'zen corner.glb') -Force
Copy-Item -LiteralPath (Join-Path $PSScriptRoot ('manifest-' + $variantStem + '.json')) -Destination (Join-Path $PSScriptRoot 'manifest.json') -Force
Write-Output ('Selected ' + $Variant + '. Commit the four active files to publish the switch. Original backup files were not changed.')
