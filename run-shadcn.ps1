$keep = @(
  "button","input","form","dialog","dropdown-menu","popover","card","tabs",
  "calendar","table","checkbox","radio-group","select","avatar","switch",
  "alert","accordion"
)

$path = "C:\Users\Okan\Desktop\next-todo-app\components\ui"

Get-ChildItem -Path $path -Filter *.tsx | ForEach-Object {
  $name = $_.BaseName.ToLower()
  if ($keep -notcontains $name) {
    Write-Host "Deleting $($_.FullName)"
    Remove-Item $_.FullName -Force
  }
}
