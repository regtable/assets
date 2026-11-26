param([Parameter(Mandatory=$true)][ValidateSet('monolith','worksite','original')][string]$Variant)
$ErrorActionPreference = 'Stop'
$variantStem = 'zen-' + $Variant
foreach ($extension in @('mjs','ts')) {
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot ($variantStem + '.' + $extension)) -Destination (Join-Path $PSScriptRoot ('zen_corner.' + $extension)) -Force
}
Copy-Item -LiteralPath (Join-Path $PSScriptRoot ($variantStem + '.glb')) -Destination (Join-Path $PSScriptRoot 'zen corner.glb') -Force
Copy-Item -LiteralPath (Join-Path $PSScriptRoot ('manifest-' + $variantStem + '.json')) -Destination (Join-Path $PSScriptRoot 'manifest.json') -Force
Write-Output ('Selected ' + $Variant + '. Commit the four active files to publish the switch. Preserved variant files were not changed.')
