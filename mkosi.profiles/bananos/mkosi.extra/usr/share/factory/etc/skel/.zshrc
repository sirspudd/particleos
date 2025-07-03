. /etc/bananos/env

ZIM_HOME=${ZDOTDIR:-${HOME}}/.zim
# Install missing modules and update ${ZIM_HOME}/init.zsh if missing or outdated.
if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZIM_CONFIG_FILE:-${ZDOTDIR:-${HOME}}/.zimrc} ]]; then
  source /usr/lib/zimfw/zimfw.zsh init
fi
# Initialize modules.
source ${ZIM_HOME}/init.zsh

if [ -f /etc/profile.d/bananos_aliases.sh ]; then
    source /etc/profile.d/bananos_aliases.sh
fi
